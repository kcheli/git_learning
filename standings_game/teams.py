import itertools

def create_matchups(teams):
    return list(itertools.combinations(teams, 2))

class Team:
  def __init__(self, name, abbreviation, points):
    self.name = name
    self.abbreviation = abbreviation.upper()
    self.points = points

mun = Team("Manchester United", "MUN", 0)
che = Team("Chelsea", "CHE", 0)
tot = Team("Tottenham Hotspurs", "TOT", 0)
liv = Team("Liverpool", "LIV", 0)
ars = Team("Arsenal", "ARS", 0)
mci = Team("Manchester City", "MCI", 0)
eve = Team("Everton", "EVE", 0)
lci = Team("Leicester", "LCI", 0)
whu = Team("West Ham United", "WHU", 0)
all_teams = [mun, che, tot, liv, ars, mci, eve, lci, whu]
