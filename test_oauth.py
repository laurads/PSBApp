import oauth2

def oauth_req(url, key, secret, http_method="GET", post_body="", http_headers=None):
    consumer = oauth2.Consumer(key='GSGsovmD3gmqMa1OzUCKY12RF', secret='BC7i9PUH2yXzPMFVqnrLkqK5OuRj4gklvMJGLHNbfw7ywcyzUI')
    token = oauth2.Token(key='83327649-C2mWWDvKlcosDURWIYhJ98vcGO1wOtsThEN5FVIgj', secret='PGEFqrNa4rJy3xoBJx1KlwJzBFidJFlcnHPnzjpSO0OXz')
    client = oauth2.Client(consumer, token)
    resp, content = client.request( url, method=http_method, body=post_body, headers=http_headers )
    return content

time_line = oauth_req( 'https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=assocpsb&screen_name=assoc_psb', 'abcdefg', 'hijklmnop' )
print(time_line)
