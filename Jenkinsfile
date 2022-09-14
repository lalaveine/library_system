pipeline {
  agent any
  stages {
    stage('sonarqube-test') {
      steps {
	withSonarQubeEnv('My SonarQube Server') {
          sh "docker run \
		--rm \
		--net host \
		-e SONAR_HOST_URL="http://192.168.1.108:9000" \
		-v ${PWD}:/root/src  \
		sonarsource/sonar-scanner-cli"
        }
      }
    }
  }
}
