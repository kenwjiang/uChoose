pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'docker --version'
                sh "cd /public"
                sh "docker build -t kenwjiang/test1 ."
            }
        }
    }
}