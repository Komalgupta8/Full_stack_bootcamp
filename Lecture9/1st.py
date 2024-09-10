def repeat(num_items):
    def decorator_function(original_function):
        def wrapper_function(*args, **kwargs):
            for _ in range(num_items):
                original_function(*args, **kwargs)
        return wrapper_function
    return decorator_function

@repeat(num_items=3)
def greet(name):
    print(f"hello, {name}!")

greet("Alice")
def repeat(num_items):
    def decorator_function(original_function):
        def wrapper_function(*args, **kwargs):
            for _ in range(num_items):
                original_function(*args, **kwargs)
        return wrapper_function
    return decorator_function

@repeat(num_items=3)
def greet(name):
    print(f"hello, {name}!")

greet("Alice")

