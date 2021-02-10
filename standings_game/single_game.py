# import "print_statements" functions
from print_statements import print_competitor_names

def get_input(team_one, team_two):
   user_input = input(
       f'\nWhich team won? {team_one.abbreviation}, {team_two.abbreviation}, or DRAW --- ').upper().strip()
   return user_input

def get_input_error(user_input, team_one, team_two):
   user_input_error = input(
      f"{user_input} is invalid. Please select either {team_one.abbreviation} or {team_two.abbreviation} or 'DRAW' --- ").upper().strip()
   return user_input_error


def play_single_game(teams, game_number, total_num_games):
   team_one = teams[0]
   team_two = teams[1]

   # print competitor names
   print_competitor_names(team_one, team_two)

   # ask for input from user
   result = get_input(team_one, team_two)

   # if the user has given invalid input, ask again until proper input is received
   while result != team_one.abbreviation and result != team_two.abbreviation and result != 'DRAW':
      result = get_input_error(result, team_one, team_two)

   # if draw, assign each team 1 point and print the results
   if result == "DRAW":
      team_one.points += 1
      team_two.points += 1
      # print draw results
      # print_draw(teams)
      return teams

   # if not a draw
   else:
      winner = ""
      # loop through teams
      for team in [team_one, team_two]:
         # determine which won, based on user input
         if result == team.abbreviation:
            # assign 3 points to the winning team
            team.points += 3
            # set that team object to the "winner" variable to print at line 35
            winner = team
      # print winner
      # print_winner(winner)
      return [winner]
      


