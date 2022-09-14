pipeline {
  agent any
  stages {
    stage('sonarqube-test') {
      steps {
          withSonarQubeEnv('sonarqube-server') {
	    sh '''
		docker run \
		--rm \
		--net host \
		-e SONAR_HOST_URL=http://192.168.0.137:9050 \
		-e SONAR_LOGIN="sqp_bafe85345310621bab12ffb803c602e1180c28fe" \
    		-v "${PWD}:/usr/src" \
		sonarsource/sonar-scanner-cli -Dsonar.projectKey=jenkins-test -Dsonar.buildbreaker.skip=false
             ''';        
	}
	}
	
      }
	stage("Quality Gate"){
    def qg = waitForQualityGate() // Reuse taskId previously collected by withSonarQubeEnv
    if (qg.status != 'OK') {
      error "Pipeline aborted due to quality gate failure: ${qg.status}"
  }
}
    }
  }
