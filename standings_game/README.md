### Setup

To setup this program, run the following from within the `./standings_game/` directory:

`python3 -m venv .venv` - creates your virtual environment
`source .venv/bin/activate` - enter your virtual environment
`pip3 install -r requirements.txt` - use pip to install pytest from your requirements.txt file

### How to start

To run this program, enter the command `python3 run_tournament.py` in the `./standing_game` directory


### How to play

Follow the prompts in the command line! Be sure to enter the team abbreviations as asked


### Modify team listings

To add additional teams to the game, access the file `./standings_game/teams.py` and insert an additional class. Be sure to add your new class to the `all_teams` array.
