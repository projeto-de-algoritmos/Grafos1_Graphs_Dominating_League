from flask import Flask
from bs4 import BeautifulSoup
import requests
import re

app = Flask(__name__)

champions = []
relations = {}
url = "https://lolcounter.com/champions/"

@app.route("/")
def index():
    print("Aqui")
    champurl = requests.get(url)
    soup = BeautifulSoup(champurl.text,'html.parser')
    for champs in soup.find_all("div", attrs={"class":"left champ-img"}):
        print(str(champs))
        results = re.search(r'find=\"[a-z]*\"', str(champs))
        if results:
            champions.append(results.group()[6:-1])
    
    #scraping("aatrox")
    #scraping("anivia")
    #scraping("alistar")
    #relationships()
    return str(champions)
    #return "Alo"

def scraping(name):
    if champions.count(name) == 0:
        champions.append(name)
    

def relationships():
    for a in champions:
        relations[a] = []

    addrelation("aatrox",["anivia","mid",5])
    addrelation("anivia",["aatrox","top",5])
    addrelation("aatrox",["alistar","sup",7])

def addrelation(champion, link):
    relations[champion].append(link)