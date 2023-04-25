pipeline {
  agent {
    node {
        label "jenkins-node-python-agent"
    }
  }
  stages {
        stage('Install Dependencies') {
            steps {
                sh '''
                    cd login-mongo/frontend
                    npm install
                '''
        
            }
        }
        // stage('Build') {
        //     when {
        //         anyOf {
        //             branch 'main';
        //             branch 'develop'
        //         }
        //     }
        //     steps {
        //         sh 'npm run build'
        //     }
        // }stage("Testing") {
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

    // stage('SonarQube Analysis') {
    //   steps {
    //     withSonarQubeEnv('SonarQube') {
    //       script {
    //         def scannerHome = tool 'SonarScanner';
    //         sh "${scannerHome}/bin/sonar-scanner"
    //       }
    //     }
    //   }
    // }

    //  stage('Prepare to Deploy') {
    //      when {
    //          anyOf {
    //              branch 'staging';
	// 			 branch 'develop'
    //          }
    //      }

    //    steps {
    //      withAWS(region:'eu-west-1',credentials:'aws-cred') {
    //        script {
    //          def gitsha = sh(script: 'git log -n1 --format=format:"%H"', returnStdout: true)
    //          s3_filename = "${s3_filename}-${gitsha}"
    //          sh """
    //              aws deploy push \
    //              --application-name ${appname} \
    //              --description "This is a revision for the ${appname}-${gitsha}" \
    //              --ignore-hidden-files \
    //              --s3-location s3://${s3_bucket}/${s3_filename}.zip \
    //              --source .
    //            """
    //        }
    //      }
    //    }
    //  }
	//  stage('Deploy to Development') {
    //      when {
    //          branch 'develop'
    //      }
    //    steps {
    //      withAWS(region:'eu-west-1',credentials:'aws-cred') {
    //        script {
    //          sh """
    //              aws deploy create-deployment \
    //              --application-name ${appname} \
    //              --deployment-config-name CodeDeployDefault.OneAtATime \
    //              --deployment-group-name ${deploy_group} \
    //              --file-exists-behavior OVERWRITE \
    //              --s3-location bucket=${s3_bucket},key=${s3_filename}.zip,bundleType=zip
    //            """
    //        }
    //      }
	//    }
	//  }
	// stage('Deploy To Production') {
    //   when {
    //     branch 'staging'
    //   }
    //   steps {
    //     withAWS(region:'eu-west-1',credentials:'aws-cred') {
    //       script {
    //         sh """
    //             aws deploy create-deployment \
    //             --application-name ${appname} \
    //             --deployment-config-name CodeDeployDefault.OneAtATime \
    //             --deployment-group-name ${deploy_group_prod} \
    //             --file-exists-behavior OVERWRITE \
    //             --s3-location bucket=${s3_bucket},key=${s3_filename}.zip,bundleType=zip
    //           """
    //       }
    //     }
    //   }
    // }

    stage('Clean WS') {
      steps {
        cleanWs()
      	}
   	}
 }
 