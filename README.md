# Planowanie powierzeń dla kierunku
> **Grupa**: 
> * 228109 - *Paweł Głuszczak* 
> * 228043 - *Marcin Szeptun*
> * 000000 - *Tomasz Mosur*

# Wybrane wymagania
## Funkcjonalne
* Powiadomienie o powierzeniach i ich aktualizacjach (np. wiadomości wysyłane do opiekunów kursu o zmianie obsady zajęć towarzyszących). Zatwierdzanie/Sugestie zmian w propozycji powierzeń. 
* Definicja preferencji przez pracowników.
* Raportowanie: zajęć bez obsady, aktualnych powierzeń pracowników, aktualnych planów zajęć pracowników 

## Niefunkcjonalne
* Logowanie on-site,
* Dwie wersje językowe interfejsu użytkownika: polski i angielski

# Dodatkowe informacje
> Jest to sekcja skracająca zaimplementowane lub użyte techniki, które wykraczają poza wymagania wymienione wyżej. Poszczególne aplikacje składające się na system opisane są niżej. [Implementacja systemu](#implementacja-systemu)

* System wykorzystuje zewnętrzy sytem autoryzacyjny : `Firebase Authentication`
* System zbudowany jest w stylu 3 warstwowym:
    * Baza danych MySQL *[Więcej](#baza-danych)*
    * Serwis webowy z użyciem Angular 8 *[Więcej](#front-end)*
    * REST API z użyciem Spring Boota *[Więcej](#back-end)*
* Każda warstwa systemu budowana jest z osobnego obrazu dockerowego, po czym całośc uruchamiania jest za pomocą skryptu docker-compose.
* Aplikacja front-endowa budowana jest w dwóch wersjach. W wersji polskiej oraz angielskiej. Z użyciem odpowiedniego adresu URL wybierana jest wersja językowa strony
* Aplikacja back-endowa posiada zautomatyzowane testy jednostkowe sprawdzające działanie wrażliwych punktów aplikacji.

# Uruchamianie aplikacji
Tutaj opis jak uruchamiać aplikacje 


# Implementacja systemu
## Baza danych
Tutaj opis implementacji bazy danych


## Front-end
Tutaj opis fontu

## Back-end
Tutaj opis backendu

