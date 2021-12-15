pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh "curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg"
                sh 'docker --version'
                sh "cd /public"
                sh "docker build -t kenwjiang/test1 ."
            }
        }
    }
}