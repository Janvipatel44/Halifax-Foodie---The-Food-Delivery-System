/**
 * Author: Janvi Patel.
 * Created On: 2021-06-07
 * Word cloud data fetch and filter named entities
 */

import json
import boto3
import random
from boto3.dynamodb.conditions import Attr

def lambda_handler(event, context):
    # TODO implement

    #Store the data into json format
    data = json.loads(event['body'])

    #Connection to dynamoDB
    db = boto3.resource('dynamodb')
    table = db.Table('feedback')

    #fetch the data for a particular restaurantId only
    fetchData =  table.scan(FilterExpressio.Attr('restaurantId').eq(data['restaurantId']))
    print(fetchData)

    # https://www.geeksforgeeks.org/removing-stop-words-nltk-python/
    # https://www.tutorialspoint.com/python_text_processing/python_remove_stopwords.htm
    stopWords = ['ourselves', 'hers', 'between', 'yourself', 'but', 'again', 'there', 'about', 'once',
                 'during', 'out', 'very', 'having', 'with', 'they', 'own', 'an', 'be', 'some',
                 'for', 'do', 'its', 'yours', 'such', 'into', 'of', 'most', 'itself', 'other',
                 'off', 'is', 's', 'am', 'or', 'who', 'as', 'from', 'him', 'each', 'the', 'themselves',
                 'until', 'below', 'are', 'we', 'these', 'your', 'his', 'through', 'don', 'nor', 'me',
                 'were', 'her', 'more', 'himself', 'this', 'down', 'should', 'our', 'their', 'while',
                 'above', 'both', 'up', 'to', 'ours', 'had', 'she', 'all', 'no', 'when', 'at', 'any',
                 'before', 'them', 'same', 'and', 'been', 'have', 'in', 'will', 'on', 'does', 'yourselves',
                 'then', 'that', 'because', 'what', 'over', 'why', 'so', 'can', 'did', 'not', 'now', 'under',
                 'he', 'you', 'herself', 'has', 'just', 'where', 'too', 'only', 'myself', 'which', 'those', 'i',
                 'after', 'few', 'whom', 't', 'being', 'if', 'theirs', 'my', 'against', 'a', 'by', 'doing', 'it',
                 'how', 'further', 'was', 'here', 'than', 'your', u'yours', u'yourself', u'yourselves', u'he',
                 u'him', u'his', u'himself', u'she',
                 u"she's", u'her', u'hers', u'herself', u'it', u"it's", u'its', u'itself', u'they', u'them',
                 u'their', u'theirs', u'themselves', u'what', u'which', u'who', u'whom', u'this',
                 u'that', u"that'll", u'these', u'those', u'am', u'is', u'are', u'was', u'were', u'be',
                 u'been', u'being', u'have', u'has', u'had', u'having', u'do', u'does', u'did', u'doing',
                 u'a', u'an', u'the', u'and', u'but', u'if', u'or', u'because', u'as', u'until',
                 u'while', u'of', u'at']

    # Filter python objects with list comprehensions
    filteredWords = [word for word in fetchData["message"] if not word in fetchData["message"]]

    print(filteredWords)

    return {
        'statusCode':200 ,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body':json.dumps(filteredWords)
    }
