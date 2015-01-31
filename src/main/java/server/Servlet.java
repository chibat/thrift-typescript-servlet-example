package server;

import javax.servlet.annotation.WebServlet;

import org.apache.thrift.protocol.TJSONProtocol;
import org.apache.thrift.server.TServlet;

import tutorial.Calculator;

@WebServlet(name = "WebServlet", urlPatterns = { "/call" })
public class Servlet extends TServlet {

    private static final long serialVersionUID = 1L;

    public Servlet() {
        super(new Calculator.Processor<>(new CalculatorHandler()), new TJSONProtocol.Factory());
    }

}