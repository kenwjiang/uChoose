pipeline {
    agent { docker { image 'node:16.13.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
                sh "cd /public"
                sh "npm run-script build"
            }
        }
    }
}