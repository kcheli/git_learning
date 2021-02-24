def print_competitor_names(team_one, team_two):
   print(f"Home team is {team_one.name} ({team_one.abbreviation})")
   print(f"Away team is {team_two.name} ({team_two.abbreviation})")

def print_welcome_message(total_num_games):
   print("\n--- --- --- --- --- --- --- --- --- ---\n")
   print(f"Welcome! There will be {total_num_games} games in this tournament\n")

def print_single_game_results(results):
   draw = results[0].single_game_points_holder == results[1].single_game_points_holder
   if draw:
      print(f"{results[0].name} vs. {results[1].name} resulted in a draw with {results[0].single_game_points_holder} points each!\n")
   else:
      winner = results[0] if results[0].single_game_points_holder > results[1].single_game_points_holder else results[1]
      loser = results[0] if results[0].single_game_points_holder < results[1].single_game_points_holder else results[1]
      print(f"{winner.name} won with {winner.single_game_points_holder} goals against {loser.name} with {loser.single_game_points_holder} goals!\n")

def print_standings(all_teams, game_number, total_num_games):
   # check if we are on the final match - "game_number == total_num_games" -returns a boolean
   is_final_match = game_number == total_num_games

   # create a new list form the list of teams, orgainzed by # of points
   standings = sorted(all_teams, key=lambda x: (x.points, x.goal_diff), reverse=True)

   # print the results of a normal match
   print_results(is_final_match, game_number, standings)

   # if we have reached the final match, we need to calculate the champion(s)
   if is_final_match:
      # determine the highest number of points in the league
      winning_points = max(standings, key=lambda x: x.points).points
      # use "list comprehension" (create list from "standings" where a team's points = winning_points)
      winning_teams = [j for i, j in enumerate(
          standings) if j.points == winning_points]
      # if only one winner, call single champion function
      if len(winning_teams) == 1:
         print_single_champion(winning_teams[0])
      # if more than one winner, call multiple champion function
      elif len(winning_teams) > 1:
         print_multiple_champions(winning_teams)

def print_results(is_final_match, game_number, standings):
   # print a different banner for the final set of standings, 
   # against the variable "is_final_match", which is calculated and passed 
   # in from the "run_tournament()" function
   print(":::: FINAL STANDINGS ::::" if is_final_match else f"--- Results after game {game_number} ---")

   # loop thourgh the teams and print their total points
   for index, team in enumerate(standings):
      print(f"{index+1}. {team.name} ({team.abbreviation}) has {team.points} points and a goal difference of {team.goal_diff}")

   # print extra line for cleaner spacing (optional) 
   print("\n")

def print_single_champion(champion):
   print(
      f"{champion.name} ({champion.abbreviation}) is the champion with {champion.points} points!\n")
   print("--- --- --- --- --- --- --- --- --- ---\n")


def print_multiple_champions(champions):
   # we are going to build the final message by appending strings to 
   # the below variable "final_results"
   final_results = "It's a championship draw between "
   number_of_champions = len(champions)
   # loop through the list of champions 
   for index, team in enumerate(champions):
      # if two champions
      if number_of_champions == 2:
         # add team name to "final_results"
         final_results += f"{team.name} ({team.abbreviation})"
         if index == 0:
            # after the first team, add " and " to "final_results"
            final_results += " and "
      # if more than two teams, we need to properly use commas
      elif (number_of_champions > 2):
         # add team name to final_results
         final_results += f"{team.name} ({team.abbreviation})"
         # if we are two teams from the final index, we need to add a ", " 
         # to "f"inal_results"
         if index < number_of_champions-2:
            final_results += ", "
         # if we are at the index preceeding the final team, we need to add ", 
         # and " to "final_results"
         elif index == number_of_champions-2:
            final_results += ", and "
   # add the number of winning points to final_results
   final_results += f" with {team.points} points each!\n"
   # print final_results
   print(final_results)
   print("--- --- --- --- --- --- --- --- --- ---\n")
