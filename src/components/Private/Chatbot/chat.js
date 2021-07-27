document.getElementById("input").focus();

// Initialize the Amazon Cognito credentials provider
// Provide the region of your AWS account below
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
// Provide your Pool Id below
    IdentityPoolId: 'us-east-1:293efb1f-2854-4acc-ae29-bfbf4d7867e6',
});

var lexruntime = new AWS.LexRuntime();
var lexUserId = 'chatbot-demo' + Date.now();
var sessionAttributes = {};

function pushChat() {
    var endConversationStatement = "Customer: I have no more questions. Thank you." 
    // If the agent has to send a message, start the message with 'Agent'
    var inputText = document.getElementById('input');
    if (inputText && inputText.value && inputText.value.trim().length > 0 && inputText.value[0]=='A') {
        showMessage(inputText.value, 'agentRequest','conversation');
        inputText.value = "";
    }
    // If the customer has to send a message, start the message with 'Customer'
    if(inputText && inputText.value && inputText.value.trim().length > 0 && inputText.value[0]=='C') {
        // disable input to show we're sending it
        var input = inputText.value.trim();
        inputText.value = '...';
        inputText.locked = true;
        customerInput = input.substring(2);

        // Send it to the Lex runtime
        // Provide the name of your bot below 
        var params = {
            botAlias: '$LATEST',
            botName: 'HalifaxFoodie',
            inputText: customerInput,
            userId: lexUserId,
            sessionAttributes: sessionAttributes
        };

        showMessage(input, 'customerRequest', 'conversation');
        if(input== endConversationStatement){
            showMessage('Conversation Ended.','conversationEndRequest','conversation');
        }
        lexruntime.postText(params, function(err, data) {
            if (err) {
                console.log(err, err.stack);
                showMessage('Error:  ' + err.message + ' (see console for details)', 'lexError', 'conversation1')
            }

            if (data && input!=endConversationStatement) {
                // Capture the sessionAttributes for the next cycle
                sessionAttributes = data.sessionAttributes;
                
                    showMessage(data, 'lexResponse', 'conversation1');
            }
            // Re-enable input
            inputText.value = '';
            inputText.locked = false;
        });
    }
    // We always cancel form submission
    return false;
}

function showMessage(daText, senderRequest, displayWindow){

    var conversationDiv = document.getElementById(displayWindow);
    var requestPara = document.createElement("P");
    requestPara.className = senderRequest;
    if(senderRequest=='lexResponse'){
        requestPara.appendChild(document.createTextNode(daText.message));
        requestPara.appendChild(document.createElement('br'));
    }
    else{
    requestPara.appendChild(document.createTextNode(daText));
    }
    conversationDiv.appendChild(requestPara);
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
}