from teams import Team, create_matchups
from unittest.mock import patch
import print_statements
import single_game
import pprint

pp = pprint.PrettyPrinter()

test_team_1 = Team("test_team_1", "TT1", 0)
test_team_2 = Team("test_team_2", "TT2", 0)
test_team_3 = Team("test_team_3", "TT3", 0)

all_test_teams = [test_team_1, test_team_2, test_team_3]
expected_results = [
    (test_team_1, test_team_2),
    (test_team_1, test_team_3),
    (test_team_2, test_team_3)
]

def test_create_matchups():
   assert(create_matchups(all_test_teams)) == expected_results


@patch('single_game.get_input', return_value='TT1')
def test_play_single_game_single_winner(self):
   output = single_game.play_single_game([test_team_1, test_team_2], 1, 1)

   assert output == [test_team_1]


@patch('single_game.get_input', return_value='DRAW')
def test_play_single_game_draw(self):
   output = single_game.play_single_game([test_team_1, test_team_2], 1, 1)

   assert output == [test_team_1, test_team_2]
