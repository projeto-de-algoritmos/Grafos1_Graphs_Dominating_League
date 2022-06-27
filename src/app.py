from flask import Flask
from bs4 import BeautifulSoup
import requests
import re

app = Flask(__name__)

champions = {}
relations = {}
counter = {}
myheaders = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
url = "https://www.leagueofgraphs.com/champions/counters"
champurl = "https://www.leagueofgraphs.com"

@app.route("/")
def index():
    scraping()
    relationships()
    #addrelations("Aatrox")
    print(relations)
    return ("enois q voa")
    #return str(champions)

def scraping():
    champlisturl = requests.get(url, headers=myheaders)
    soup = BeautifulSoup(champlisturl.text,'html.parser')
    for champs in soup.select("tr > td.championCell:first-of-type"):
        name = champs.select("span.name")[0].text
        role = champs.select("i")[0].text.replace(" ","")
        ref = champs.select("a")[0]["href"]
        champions[name] = [role[1:],ref]

def relationships():
    for champ in champions:
        #print(champions[champ][1])
        #print(champ)
        addrelations(champ)

def addrelations(champ):
    print(champ)
    if not champ in relations:
        searchurl = champurl+champions[champ][1]
        #print(searchurl)
        relationurl = requests.get(searchurl, headers=myheaders)
        soup = BeautifulSoup(relationurl.text,'html.parser')
        combiners=soup.select("div#mainContent > div.row:first-of-type > div.medium-8.small-24.columns:nth-of-type(3)")
        if len(combiners):
            champCombiners = combiners[0].findAll("span")
    
            relations[champ] = []
            for i in champCombiners:
                relations[champ].append(i.text)

        counters=soup.select("div#mainContent > div.row > div.medium-8.small-24.columns:nth-of-type(2)")
        champCounters = counters[0].findAll("span")
        
        if len(champCounters):
            counter[champ] = champCounters[0].text