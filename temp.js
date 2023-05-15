// Initialize the client with your api key, no secret and your app id
const client = stream.connect('s8rw6t8vz93d', null, '1249736');

// For the feed group 'user' and user id 'eric' get the feed
// The user token is generated server-side for this user
const ericFeed = client.feed('user', 'eric', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6IioiLCJhY3Rpb24iOiIqIiwiZmVlZF9pZCI6InVzZXJlcmljIn0.sqpTK7MW5nV6fJVqVFZdS1-MW--2lGMUor3b0Xq_uVw');

// Add the activity to the feed
ericFeed.addActivity({
  actor: 'SU:eric',
  tweet: 'Hello world', 
  verb: 'tweet', 
  object: 1
});