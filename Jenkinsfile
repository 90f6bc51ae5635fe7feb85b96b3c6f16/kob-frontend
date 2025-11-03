    pipeline {
        agent any

        stages {
            stage('set-env') {
                steps {
                    setenv()
                }
            }
            stage('build'){
                steps {
                    script {
                        sh """
                            docker build -f Dockerfile  -t ${APP_REGISTRY}/${APP_NAME} .
                        """
                    }
                }  
            }


            stage('push-registry'){
                steps {
                    script {
                        withCredentials([usernamePassword(credentialsId: 'habor-rvvcs', usernameVariable: 'userregistry', passwordVariable: 'passregistry')]) {
                            sh """
                                docker login ${APP_REGISTRY} -u ${userregistry} -p '${passregistry}'
                                docker push ${APP_REGISTRY}/${APP_NAME}
                            
                            """
                        }
                    }
                }  
            }

            stage('deploy'){
                steps {
                    script {
                        withCredentials([usernamePassword(credentialsId: 'pull-habor-rvvcs', usernameVariable: 'userregistry', passwordVariable: 'passregistry')]) {
                            sshagent(['ssh_to_45_196']) {
                                sh """ 
                                ssh -tt -o StrictHostKeyChecking=no root@45.144.166.196 " 

                                cd ${APP_PATH}

                                docker login ${APP_REGISTRY} -u ${userregistry} -p '${passregistry}'
                            
                                docker pull ${APP_REGISTRY}/${APP_NAME}
                    
                                docker-compose  up ${APP_SERVICE_NAME} -d 
                
                                echo "Clear docker image."

                                docker image prune -f

                                "
                                """
                            }
                        }
                        
                    }
                }
            }
        }
    }

    def setenv(){
        def envapp = readYaml file: "env-app.yaml"
        APP_REGISTRY = envapp.App.Registry
        APP_NAME = envapp.App.AppName
        APP_SERVICE_NAME = envapp.App.ServiceName
        APP_PATH = envapp.App.AppPath
    }
