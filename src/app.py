from flask import Flask
from bs4 import BeautifulSoup
import requests
import re

app = Flask(__name__)

champions = {}
relations = {}
myheaders = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
url = "https://www.leagueofgraphs.com/champions/counters"
champurl = "https://www.leagueofgraphs.com"

@app.route("/")
def index():
    scraping()
    relationships()
    addrelations(champions["Aatrox"])
    return str(champions)

def scraping():
    champlisturl = requests.get(url, headers=myheaders)
    soup = BeautifulSoup(champlisturl.text,'html.parser')
    for champs in soup.select("tr > td.championCell:first-of-type"):
        name = champs.select("span.name")[0].text
        role = champs.select("i")[0].text.replace(" ","")
        ref = champs.select("a")[0]["href"]
        champions[name] = [role[1:],ref]

def relationships():
    pass
    #for champ in champions:
        #print(champions[champ][1])
        #addrelations(champ)

def addrelations(champ):
    #pass
    #print(champ[1])
    searchurl = champurl+champ[1]
    #print(searchurl)
    relationurl = requests.get(searchurl, headers=myheaders)
    #soup = BeautifulSoup(relationurl.text,'html.parser')
    print(relationurl.text)