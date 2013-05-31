package ;

class MainTest {
	
	static public function main(){
		var r = new haxe.unit.TestRunner();
		r.add(new TempTests());
		r.run();
	}
}