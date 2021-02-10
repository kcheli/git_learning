from teams import all_teams, create_matchups
from single_game import play_single_game
from print_statements import print_standings, print_welcome_message, print_single_game_results
import random

# create the matrix of team combinations
matchups_list = create_matchups(all_teams)
# randomize the matrix of team matchups
matchups = random.sample(matchups_list, len(matchups_list))

# count the total number of games
total_num_games = len(matchups)

# root function to run tournament
def run_tournament(matches):

   # print the game's welcome message
   print_welcome_message(total_num_games)
   
   # loop through the matrix of team matchups and play a sinlge 
   # game for each matchup
   for index, teams in enumerate(matches):
      game_number = index+1
      # dynamically check if we are at the final game against 
      # the total number of matchups
      is_final_game = game_number == total_num_games

      # run a single game
      results = play_single_game(teams, game_number, total_num_games)
      print_single_game_results(results)

      # print results and standings
      print_standings(all_teams, game_number, total_num_games)

# here we "call" the run_tournament function, 
# which gets run when we execute `python3 run_tournament.py` 
# from the command line
run_tournament(matchups)
