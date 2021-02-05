# a = 1500
# b = 2701
# for x in range(a, b):
#     c = x / 35
#     if c.is_integer():
#         print(x)

# number = 5
# guess = ""
# while guess != number:
#     user_input = input('guess number between 1 and 9: ')
#     if type(int(user_input)) == int:
#         guess = int(user_input)
#     else:
#         print(f"error try again")


# print('correct')


# n=5
# for index, i in enumerate(range(n)):
#     print("index: ", index)
#     for j in range(i):
#         print ('* ', end="")
#     print('')
# for index, i in enumerate(range(n,0,-1)):
#     print("index: ", index, i, n)
#     for j in range(i):
#         print('* ', end="")
#     print('')


# n = 5
# for i in range(n):
#     for j in range(i):
#         print('* ', end="")
#     print()
# for i in range(n, 0, -1):
#     for j in range(i):
#         print('* ', end="")
#     print()



# x = ''

# for i in range(0,5):
#     x += "* "
#     print(x)
# for index, i in enumerate(range(5, 0, -1)):
#     if i != :
#         print(x[0:i])


# x = '*****'
# i = ''
# for a in n:
#     i += a
#     print(i)
# for a in range(int(len(x)-1), 0, -1):
#     print(i[0:a], a)


# #count number of even and odd numbers
# numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9)
# even = 0
# odd = 0
# for x in numbers:
#     even += 1 if (x/2).is_integer() else odd += 1
# print(f'Even numbers: ${str(even)}\nOdd numbers: + ${str(odd)}')

# #count number of even and odd numbers
# numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9)
# even = 0
# odd = 0
# for x in numbers:
#     exec("even += 1" if (x/2).is_integer() else "odd +=1") 
# print(f'Even numbers: {str(even)} \nOdd numbers: {str(odd)}')


# exec("even += 1" if (x/2).is_integer() else "odd +=1")
# # exec("even += 1" if (x/2).is_integer() else "odd +=1")


# def count_evens_odds(a, b):
#     low = a if a < b else b
#     high = a if a > b else b
#     numbers = range(low, high)
#     even, odd = 0, 0
#     for x in numbers:
#         if (x/2).is_integer():
#             even += 1
#         else:
#             odd += 1
#     print(f'Even numbers: {str(even)} \nOdd numbers: {str(odd)}')

# count_evens_odds(1001, 10)


# x = 0
# exec("x = 1")
# print(x)

# print(exec("True if 5 > 4 else False'")

# def count_evens_odds(a, b):

#     low = a if a < b else b
#     high = a if a > b else b

#     numbers = range(low, high)
#     num_list = []
#     even, odd = 0, 0
#     for x in numbers:
#         y = (x/2).is_integer()
#         if y:
#             even += 1
#             num_list.append(f"{x} is even")
#         else:
#             odd += 1
#             num_list.append(f"{x} is odd")
#     print(num_list)
#     for x in num_list:
#         print(x)

#     print(f'Even numbers: {str(even)} \nOdd numbers: {str(odd)}')


# count_evens_odds(100, 3)


# x = input("Give me input: ")
# y = int(x)
# print(type(y))


# for x in range(0, 100, 2):
#     print("{:.2f}".format(x/100))
