import itertools

def create_matchups(teams):
    return list(itertools.combinations(teams, 2))

class Team:
  def __init__(self, name, abbreviation):
    self.name = name
    self.abbreviation = abbreviation.upper()
    # stores points gained for win or draw
    self.points = 0
    # records goal difference
    self.goal_diff = 0
    # stores the results of a team's latest game
    self.single_game_points_holder = 0

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
