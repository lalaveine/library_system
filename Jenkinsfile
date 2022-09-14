pipeline {
  agent any
  stages {
    stage('sonarqube-test') {
      steps {
        withSonarQubeEnv('sonarqube-server') {
	    sh "echo ${env.SONAR_AUTH_TOKEN}"
	    sh '''
		docker run \
		--rm \
		--net host \
		-e SONAR_HOST_URL=${env.SONAR_HOST_URL} \
		-e SONAR_LOGIN="sqp_bafe85345310621bab12ffb803c602e1180c28fe" \
    		-v "${PWD}:/usr/src" \
		sonarsource/sonar-scanner-cli -Dsonar.projectKey=jenkins-test
             ''';        
	}	
      }
}
	stage("Quality Gate"){
		steps {
			waitForQualityGate abortPipeline: true
		}
	}
    }
  }
