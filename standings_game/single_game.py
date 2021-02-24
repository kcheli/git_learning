# import "print_statements" functions
from print_statements import print_competitor_names
import random

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
      # set a draw score
      points = random.randrange(0, 5)
   
      team_one.points += 1
      team_two.points += 1

      # set each team's single_game_points_holder to the draw score
      team_one.single_game_points_holder = points
      team_two.single_game_points_holder = points
      # return teams

   # if not a draw
   else:
      # generate two random scores
      points_a = random.randrange(0, 5)
      points_b = random.randrange(0, 5)

      # set the higher score to "winning_score"
      winning_score = points_a if points_a > points_b else points_b
      # set the lower score to "losing_score"
      losing_score = points_a if points_a < points_b else points_b
      winner = ""
      # loop through teams
      for team in [team_one, team_two]:
         # determine which won, based on user input
         if result == team.abbreviation:
            # assign 3 points to the winning team
            team.points += 3
            # set that team object to the "winner" variable to print at line 35
            winner = team
            # set the number of points the winning team won with
            winner.single_game_points_holder = winning_score
            winner.goal_diff = winning_score - losing_score
         else:
            # set the number of points the losing team lost with
            team.single_game_points_holder = losing_score
            team.goal_diff = losing_score - winning_score
      # set each teams goal difference
   return teams
      


