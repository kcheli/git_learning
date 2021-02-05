teams = [
    {
        'name': 'Manchester United',
        'abbreviation': 'MUN',
        'points': 0
    },
    {
        'name': 'Chelsea',
        'abbreviation': 'CHE',
        'points': 0
    },
    {
        'name': 'Tottenhan Hotspurs',
        'abbreviation': 'TOT',
        'points': 0
    },
    {
        'name': 'Liverpool',
        'abbreviation': 'LIV',
        'points': 0
    },
]

number_of_games = 0

def game(a, b):
   competitors = [a, b]
   print(f"Team 1 is {a['name']}")
   print(f"Team 2 is {b['name']}")
   winner = input(
       f'Which team won, {a["abbreviation"]} or {b["abbreviation"]}? --- ').upper()
   if winner != a['abbreviation'] and winner != b['abbreviation'] and winner != 'DRAW':
      input(
          f"{winner} is invalid. Please select either {a['abbreviation']} or {b['abbreviation']} or 'DRAW' --- ")
   else:
      if winner == "DRAW":
         a['points'] += 1
         b['points'] += 1
         print(f"{a['name']} vs. {b['name']} resulted in a draw!\n")
      else:
         for x in competitors:
            if winner == x['abbreviation']:
               x['points'] += 3
               winner = x
         print(f"{winner['name']} is the winner!\n")
      printCurrentStandings(teams)


def printCurrentStandings(a):
   if number_of_games == 5:
      print(":::::FINAL STANDINGS:::")
   else:
      print(f"--- Results after game {number_of_games} ---")
   standings = sorted(a, key=lambda x: x['points'], reverse=True)
   for index, x in enumerate(standings):
      print(
          f"{index+1}. {x['name']} ({x['abbreviation']}) has {x['points']} points")
   print("\n")


game(teams[0], teams[1])
game(teams[2], teams[3])
game(teams[0], teams[2])
game(teams[1], teams[3])
game(teams[0], teams[3])
game(teams[1], teams[2])
