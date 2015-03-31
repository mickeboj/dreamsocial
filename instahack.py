import urllib

def getData(url):
    return urllib.urlopen(url).read()

def cleanData(text):
    return text[text.find('"nodes"'):]

def findPost(text):
    start=text.find('"code"')
    stop=text.find('"date"')+7
    if (start==-1):
        return None
    return [text[start:stop]]+[findPost(text[stop:])]

def numberOfPost(text):
    stop=""
    start=text.find('"media_count"')
    for idx in range(start,len(text)):
        if text[idx]==',':
            stop=idx
            break
    return text[start+14:stop]

def makeLista(text):
    return
    

def instaTag(hashtag):
    
    url="https://instagram.com/explore/tags/"+hashtag+"/"
    rawdata=cleanData(getData(url))
    print "Antal inlägg på #"+hashtag + " är " + numberOfPost(rawdata)
    
