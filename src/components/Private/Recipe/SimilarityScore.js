async function classify(content, location) {

    const endpointId = "8771235263327240192";
    const projectId = "1095962802531";
    
    const aiplatform = require('@google-cloud/aiplatform');
    const {instance, prediction} =
      aiplatform.protos.google.cloud.aiplatform.v1.schema.predict;
  
    const {PredictionServiceClient} = aiplatform.v1;
  
    const clientOptions = {
      apiEndpoint: 'us-central1-aiplatform.googleapis.com',
    };
  
    const predictionServiceClient = new PredictionServiceClient(clientOptions);
  
async function predictTextClassification() {
      console.log(endpointId)
      const endpoint = `projects/${projectId}/locations/${location}/endpoints/${endpointId}`;
      
      console.log(endpoint)
      const predictionInstance =
        new instance.TextClassificationPredictionInstance({
          content: content,
        });
      const instanceValue = predictionInstance.toValue();
  
      const instances = [instanceValue];
      const request = {
        endpoint,
        instances,
      };
  
      const [response] = await predictionServiceClient.predict(request, {timeout: 6000000});
      console.log('Predict text classification response');
      console.log(`\tDeployed model id : ${response.deployedModelId}\n\n`);
  
      console.log('Prediction results:');
  
      for (const predictionResultValue of response.predictions) {
        const predictionResult =
          prediction.ClassificationPredictionResult.fromValue(
            predictionResultValue
          );
  
        console.log(predictionResult);
      }
    }
    predictTextClassification();
  }
  
  module.exports.classification = classify;