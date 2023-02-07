def helloworld() -> None:
    print('Hello World!')


def helloworld2() -> None:
    print('Hello World <3')


x = helloworld
y = helloworld2

list_1 = list([x, y])

for function in list_1:
    function()
