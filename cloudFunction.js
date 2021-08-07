/**
 * Author: Janvi Patel.
 * Created On: 2021-06-07
 * cloud function to predict the cuisine type and similarity score
 */

const aiplatform = require('@google-cloud/aiplatform');

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.textClassification = (req, res) => {
  console.log('receipeeeeeeeeeeeeeeeeeeeeeeeee',req.query);
  let data = req.query;
  const content = data.text;
  const endpointId = "1627400354410790912";
  const projectId = "csci5410project";
  const location = "us-central1";

  
  const {instance, prediction} = aiplatform.protos.google.cloud.aiplatform.v1.schema.predict;

  const {PredictionServiceClient} = aiplatform.v1;

  const clientOptions = {
    apiEndpoint: 'us-central1-aiplatform.googleapis.com',
  };

  const predictionServiceClient = new PredictionServiceClient(clientOptions);
  const endpoint = `projects/${projectId}/locations/${location}/endpoints/${endpointId}`;
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

    console.log("Prediction Starts");

    predictionServiceClient.predict(request, {timeout: 6000000}, (error, response) => {
        if (response) {
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
            return res.status(200).json({'result': response.predictions})
        } else if (error) {
            console.log(error);
        }


    });
    

}