pipeline {
  agent any
  stages {
    stage('sonarqube-test') {
      steps {
	def scannerHome = '''
		docker run \
		--rm \
		--net host \
		-e SONAR_HOST_URL="http://192.168.0.137:9050" \
		-v ${PWD}:/root/src  \
		sonarsource/sonar-scanner-cli exec /opt/sonar-scanner
             ''';

	withSonarQubeEnv('sonarqube-server', envOnly: true) {
	    docker run \
		--rm \
		--net host \
		-e SONAR_HOST_URL=env.SONAR_HOST_URL \
		-v ${PWD}:/root/src  \
		sonarsource/sonar-scanner-cli         }
      }
    }
  }
}
