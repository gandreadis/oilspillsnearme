from rdflib import Graph, RDF, Namespace, Literal, URIRef
import geopy.distance

g = Graph()

EX = Namespace('http://www.oilspillsnear.me/')
g.bind('osnm',EX)

def load(filename):
  with open(filename, 'r') as f:
    g.load(f, format='turtle')

print "Reading the TTL sources"

load('../countries.ttl')
load('../oil-spills.ttl')

country_triples = g.query("""
  PREFIX osnm: <http://www.oilspillsnear.me/>
  SELECT DISTINCT ?country ?lat ?lng
  WHERE {
    ?country a osnm:Country .
    ?country osnm:hasLatitude ?lat .
    ?country osnm:hasLongitude ?lng .
  }
""")

spill_triples = g.query("""
  PREFIX osnm: <http://www.oilspillsnear.me/>
  SELECT DISTINCT ?spill ?lat ?lng
  WHERE {
    ?spill a osnm:OilSpill .
    ?spill osnm:hasLatitude ?lat .
    ?spill osnm:hasLongitude ?lng .
  }
""")

f = open("../spill-country-matches.ttl", "w")
f.write("@prefix osnm: <http://www.oilspillsnear.me/> .\n\n")

print "Computing minimum distances"

for spill in spill_triples:
  min_dist = float("inf")

  for country in country_triples:
    dist = abs(geopy.distance.vincenty((spill[1], spill[2]), (country[1], country[2])).km)

    if dist < min_dist:
      min_dist = dist
      min_country = country[0]

  f.write("<%s> osnm:hasNearbyCountry <%s> .\n" % (spill[0], min_country))

f.close()

print "Computation finished, output in ../spill-country-matches.ttl"
