pipeline {
  agent any
  
  stages {
        stage("Test pipelint"){
            steps{
                echo "Hello world"
            }
        }
        stage('Install Dependencies') {
            steps {
                sh '''
                    ls
                    cd login-mongo/frontend
                    npm install
                '''
        
            }
        }
        stage('Test Application'){
             when {
                anyOf {
                    branch "main"
                    branch "develop"
                }
            }
            steps {
                sh '''
                    cd login-mongo/frontend
                    npm test
                '''
            }
        }
           
    }

}