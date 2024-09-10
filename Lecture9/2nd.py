def exception_handler(original_function):
    def wrapper_function(*args, **kwargs):
        try:
            return original_function(*args, **kwargs)
        except Exception as e:
            print(f"An error occured: {e}")
        return wrapper_function
    
@exception_handler
def divide(a,b):
    return a/b
    
print(divide(10,2))
print(divide(10,0))