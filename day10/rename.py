# # def fact(a):
# #     sum=1
# #     for  i in range(1,a+1):
        
# #         sum=sum*i
# #     return sum
# # print(fact(5))

# # class Demo:
# #     @classmethod
# #     def show(cls):
# #         print("This is a class method")
# # # Calling by object 
# # # d = Demo()
# # # d.show()
# # #Calling by className
# # Demo.show()

# # class Demo:
# #     @staticmethod
# #     def show():
# #         print("This is a class method")
# # # Calling by object 
# # d = Demo()
# # d.show()
# # #Calling by className
# # Demo.show()

# class Demo:
#     def __init__(self,name,age):
#         self.name=name
#         self.age=age
#     def dm(self):
#         print(self.age)
#         print(self.name)
# class Chlid(Demo):
#     def __init__(self,name,age,gen):
#         # Demo.__init__(self,name,age)
#         super().__init__(name,age)
#         self.gen=gen
#     def dm2(self):
#         # Demo.dm(self)
#         super().dm()
#         print(self.gen)
# class Third(Chlid):
#     def __init__(self,name,age,gen,no):
#         super().__init__(name,age,gen)
#         self.no=no
#     def last(self):
#         super().dm2()
#         print(self.no)
# c=Third("ram",23,"gen",8043)
# c.last()


# class Engine:
#     def start(self):
#         print("Engine started...")

#     def stop(self):
#         print("Engine stopped...")

# # Class 2: Car uses Engine (Composition)
# class Car:
#     def __init__(self, brand):
#         self.brand = brand
#         self.engine = Engine()   # Composition: Car HAS an Engine

#     def drive(self):
#         print(f"Driving {self.brand} car")
#         self.engine.start()

#     def park(self):
#         print(f"Parking {self.brand} car")
#         self.engine.stop()

# # Using Car class
# c = Car("Tesla")
# c.drive()
# c.park()



# class Demo:
#     def dem(self):
#         print("composition practice")
#     def dem1(self):
#         print("hello")
# class Down:
#     def down(self):
#         self.demo=Demo()
#         self.demo.dem1()
#         print("I am appu")
#         self.demo.dem()
# d=Down()
# d.down()


class Hello:
    def h1(self):
        print("my nmae is ramu")
    def init(self):
        print("no relation")
class Nothing:
    def come(self):
        self.low=Hello()
        # self.vn=clasname()
        print("hellooooo")
        self.low.h1()
        self.low.init()
n=Nothing()
n.come()