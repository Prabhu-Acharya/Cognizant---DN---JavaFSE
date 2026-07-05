import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class AAAFixtureTest {

    private int number;

    // Setup method
    @Before
    public void setUp() {
        System.out.println("Setup method executed");
        number = 10;
    }

    @Test
    public void testAddition() {

        // Arrange
        int value = number;

        // Act
        int result = value + 5;

        // Assert
        assertEquals(15, result);
    }

    // Teardown method
    @After
    public void tearDown() {
        System.out.println("Teardown method executed");
    }
}