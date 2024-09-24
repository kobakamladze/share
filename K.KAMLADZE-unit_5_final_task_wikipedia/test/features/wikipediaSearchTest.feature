Feature: Wikipedia search test

  Background:
    Given I am on the Main page

  Scenario: I search for 'Bengal tiger' and open page information
    When I search for <searchText>
    And I navigate to <pageName> page
    Then I can see information page for <searchText>

    Examples:
    |  searchText  |     pageName     |
    | Bengal tiger | More information |

  Scenario: I search 'Albert Einstein' and download related PDF
    When I search for <searchText>
    And I navigate to <pageName> page
    And I download PDF
    Then I can see downloaded PDF: <fileName>

    Examples:
    |    searchText   |     pageName     |       fileName      |
    | Albert Einstein |        PDF       | Albert_Einstein.pdf |

  Scenario: I search 'Gabriel García Márquez' with spanish language
  When I change search language to <searchLang>
  And I search for <searchText>
  Then I can see article page for <searchText>

  Examples:
  |       searchText       | searchLang |
  | Gabriel García Márquez |     es     |