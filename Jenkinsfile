pipeline {
  agent {
    node {
        label 'jenkins-node-python-agent'
    }
  }
  
  stages {
        stage("Test pipeline"){
            steps{
                echo "Hello world"
            }
        }
        stage('Install Dependencies') {
            steps {
                sh '''
                    cd login-mongo-frontend
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
                    cd login-mongo-frontend
                    npm test
                '''
            }
        }
           
    }

}