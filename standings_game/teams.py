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

mun = Team("Manchester United", "MUN")
che = Team("Chelsea", "CHE")
tot = Team("Tottenham Hotspurs", "TOT")
liv = Team("Liverpool", "LIV")
ars = Team("Arsenal", "ARS")
mci = Team("Manchester City", "MCI")
eve = Team("Everton", "EVE")
lci = Team("Leicester", "LCI")

# all_teams = [mun, che, tot, liv, ars, mci, eve, lci]
all_teams = [mun, che, tot, liv, eve, lci]
# all_teams = [mun, che, tot]
