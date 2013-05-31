package ;

import Main;

class TempTests extends haxe.unit.TestCase {
	
	public function testTrue(){
        assertEquals( "A", "A" );
    }

    public function testMain(){
        assertEquals( "done", new Main().doSomething() );
    }
}