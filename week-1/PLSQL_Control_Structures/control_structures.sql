SET SERVEROUTPUT ON;

-- =========================================================
-- Scenario 1:
-- Apply 1% discount for customers above 60 years
-- =========================================================

DECLARE
    CURSOR c_customers IS
        SELECT CustomerID, DOB
        FROM Customers;

    v_age NUMBER;

BEGIN
    FOR cust IN c_customers LOOP

        -- Calculate customer age
        v_age := TRUNC(MONTHS_BETWEEN(SYSDATE, cust.DOB) / 12);

        IF v_age > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = cust.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'Scenario 1: Senior citizen discounts applied.'
    );

END;
/

-- =========================================================
-- Scenario 2:
-- Promote customers to VIP if balance > 10000
-- =========================================================

BEGIN

    FOR cust IN (
        SELECT CustomerID, Balance
        FROM Customers
    ) LOOP

        IF cust.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = cust.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'Scenario 2: VIP statuses updated.'
    );

END;
/

-- =========================================================
-- Scenario 3:
-- Send reminders for loans due within 30 days
-- =========================================================

BEGIN

    DBMS_OUTPUT.PUT_LINE('--- Loan Reminders ---');

    FOR loan_rec IN (

        SELECT c.Name,
               l.EndDate
        FROM Loans l
        JOIN Customers c
        ON l.CustomerID = c.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30

    ) LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Dear ' ||
            loan_rec.Name ||
            ', your loan is due soon on ' ||
            TO_CHAR(loan_rec.EndDate, 'YYYY-MM-DD')
        );

    END LOOP;

END;
/