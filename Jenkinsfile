pipeline {
  agent any
  stages {
    stage('sonarqube-test') {
      steps {
	withSonarQubeEnv('sonarqube-server', envOnly: true) {
	    sh '''
		docker run \
		--rm \
		--net host \
		-e SONAR_HOST_URL=env.SONAR_HOST_URL \
		-v ${PWD}:/root/src  \
		sonarsource/sonar-scanner-cli exec /opt/sonar-scanner
             ''';        
	}
      }
    }
  }
}
