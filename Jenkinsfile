pipeline {
  agent any
  stages {
    stage('UAT') {
      parallel {
        stage('UAT') {
          steps {
            git(url: 'https://github.com/fpunthira/jenkins01.git', branch: 'master')
            echo 'Hello01'
            sleep 20
          }
        }
        stage('UAT02') {
          steps {
            echo 'Hello0111'
            sleep 20
          }
        }
      }
    }
  }
}