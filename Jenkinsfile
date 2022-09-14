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
		-e SONAR_HOST_URL="http://192.168.0.137:9050" \
		-v ${PWD}:/root/src  \
		sonarsource/sonar-scanner-cli
             '''
        }
      }
    }
  }
}
