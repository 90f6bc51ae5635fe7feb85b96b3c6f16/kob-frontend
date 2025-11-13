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
                            docker build -f Dockerfile  -t ${APP_REGISTRY}/${APP_NAME}:${APP_VERSION} .
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
                                docker push ${APP_REGISTRY}/${APP_NAME}:${APP_VERSION}
                            
                            """
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
        APP_VERSION = envapp.App.AppVersion

    }
