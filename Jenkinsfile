pipeline {
  agent any
  stages {
    stage('UAT') {
      steps {
        git(url: 'https://github.com/fpunthira/jenkins01.git', branch: 'master')
        echo 'Hello01'
        sleep 20
      }
    }
  }
}