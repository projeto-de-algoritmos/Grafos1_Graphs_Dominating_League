from flask import Flask
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)

champions = {}
relations = {}
counter = {}
composition = {"Top" : "0",
                "Jungler" : "0",
                "Mid" : "0",
                "ADCarry" : "0",
                "Support" : "0",
            }

myheaders = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
url = "https://www.leagueofgraphs.com/champions/counters"
champurl = "https://www.leagueofgraphs.com"

@app.route("/")
def index():
    scraping()
    relationships()
    bfs("Aatrox")
    return (composition)

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
        addrelations(champ)

def addrelations(champ):
    print(champ)
    if not champ in relations:
        searchurl = champurl+champions[champ][1]
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


def bfs(node):
    if node in counter:
        inUse = []
        visited = []
        queue = []
        mycounter = counter[node]
        visited.append(mycounter)
        queue.append(mycounter)
        while queue:
            aux = queue.pop(0)

            for position in composition:
                if position in champions[aux][0] and composition[position] == "0" and inUse.count(aux) == 0:
                    composition[position] = aux
                    inUse.append(aux)

        
            for neighbour in relations[aux]:
                if neighbour not in visited:
                    visited.append(neighbour)
                    queue.append(neighbour)
        print(composition)
    else:
        print("There is no counter to this champion using gold lead")