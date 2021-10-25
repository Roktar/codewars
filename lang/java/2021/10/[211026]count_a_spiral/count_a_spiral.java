import java.math.BigInteger;
import java.math.BigDecimal;
import java.math.RoundingMode;

class Spiral {
    public static BigInteger sum(BigInteger size) {      
      return new BigDecimal(size.multiply(size)).divide(new BigDecimal("2"), 0, RoundingMode.HALF_UP).toBigInteger().add(size.subtract(new BigInteger("1")));
    }
}