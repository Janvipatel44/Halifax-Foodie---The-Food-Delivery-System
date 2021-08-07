/**
 * Author: Janvi Patel.
 * Created On: 2021-06-07
 * feedback store into dynamodb
 */

import json
import boto3
import random
def lambda_handler(event, context):
    # TODO implement

    #Store the data into json format
    data = json.loads(event['body'])

    #Connection with DynamoDb
    db = boto3.resource('dynamodb')

    #Connecting to feedback table
    table = db.Table('feedback')

    #put the feedback, id along with restauntId into the table
    table.put_item(Item = {
        'id': str(random.randint(1, 50)),
        'message': data['data'],
        'restaurantId': data['restaurantId']
    })

    #returns 200 once successfully entered into database
    return {
        'statusCode':200 ,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
    }
