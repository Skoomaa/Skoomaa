extends Node


var supposition = 500
var mini = 0 
var maxi = 1000
var fin = false
var message_intro = []
var reponse = 200



# Called when the node enters the scene tree for the first time.
func _ready():
	message_intro = ["-------------------------","Bonjour, je suis devindes nombres","-------------------------"]
	for i in message_intro:
		print(i)
	print('Je vais deviner le nombre auquel tu penses entre ' + str(mini) +  ' et '+  str(maxi))
	print("Votre nombre est-il " + str(supposition) + "?")
	
	if reponse < supposition:
		print("La supposition est plus haute que le nombre")
		
	if reponse > supposition:
		print("La supposition est plus petite que le nombre")
		
		
func _process(delta):
	
	if Input.is_action_just_pressed("keyup"):
		mini = supposition
		_essai("haut")
		
	if Input.is_action_just_pressed("keydown"):
		maxi = supposition
		_essai("bas")
		
	if Input.is_action_just_pressed("space"):
		fin = true
		
	_fin()
 

	
		
		
		
func _essai(reponse):
	supposition = (maxi+mini) / 2
	print(supposition)
	
	


func _fin():
	if fin:
		print("Yeaahhhh")
		get_tree().reload_current_scene()
		
		
		
	
	
	
		
		
		
	
	
		
		

	


# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass
