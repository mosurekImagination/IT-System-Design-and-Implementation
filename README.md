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
* Dodatkowo, została przygotowana konfiguracja środowiska Kubernetesa dla systemu. Pliki konfiguracyjne znajdują się w folderze app/k8s.

# Metodyka DevOps
* Skonfigurowano środowisko ciągłej integracji Travis, które przy każdej zmianie w repozytorium uruchamia testy jednostkowe zarówno warstwy backendowej jak i frontendowej. Travis informuje każdego developera o każdym niepomyślnym wykonaniu testów. 

# Architektura Docker
![Architektura Docker](link-to-image)

# Architektura Kubernetes
![Architektura Kubernetes](link-to-image)

# Uruchamianie aplikacji
Aby uruchomić aplikację należy uruchomić skrypt run-docker.sh znajdujący się w folderze app. Aplikacja po uruchomieniu będzie dostępna pod adresem localhost na porcie 80.

# Implementacja systemu
## Baza danych
Jako silnik bazy danych wybrano MySQL w wersji 8.0.18. 

## Front-end
### Ekran główny - logowanie
Uruchamiając aplikację po raz pierwszy, od użytkownika wymaga się aby wpisał dane logowania do systemu. W widocznej niżej sekcji podaje on swój login i hasło, które identyfikuje go w systemie jako użytkownika. Logowanie następuje z wykorzystaniem Firestore. Tam przechowywane są dane o użykowniku, które po otrzymaniu w aplikacji pozwalają na zidentyfikowanie go w lokalnej bazie danych za pomocą `databaseId`.

![fire_auth](readme_resources/firebase_auth_users.png)
*Konta użytkowników*

![fire_users](readme_resources/firebase_database.png)
*Dane zapisywane w firebase - odwzorowanie konta firestore na informacje w lokalnej bazie danych*

![login](readme_resources/front_login.png)
*Logowanie do aplikacji*

Po zalogowaniu się do aplikacji użytkownik z każdym następnym wejściem do niej, o ile się nie wyloguje, będzie już logowany automatycznie.

W tym momencie użytkownik może już korzystać z aplikacji.
![main_screen](readme_resources/front_main_screen.png)
*Dane dotyczące zalogowanego użytkownika*

Po wejściu w mój profil dostępne są dla użytkownika następujące opcje, spełniające wymagania funcjonalne *[Wymagania funkcjonalne](#funkcjonalne)*

### **Propozycje powierzeń**
Użykownik otrzymuje w tym miejscu listę powierzeń, które go dotyczą. Może z każdym powierzeniem podjąć trzy akcje :
* **\+**  -> zaakceptuj powierzenie
* **\-**  -> odrzuć powierzenie
* **i**   -> wejdź w szczegóły

![list](readme_resources/front_entrustments_lis.png)
*Lista proponowanych powierzeń*

Ostatnia opcja przeniesie użytkownika do odpowiedniej sekcji, gdzie wyświetlone zostaną szczegóły powierzenia oraz więcej możliwości reagowania na powierzenie.

![ent_details](readme_resources/front_entrustments_details.png)
*Szczegóły powierzenia*

W tym miejscu użytkownik musi wybrac czy akceptuje czy odrzuca powierzenie oraz dodać ewentualne uwagi do powierzenia. Opcja `zatwierdź` dostępna jest tylko gdy wybrana zostanie jakaś akcja.

Wybrana akcja zaktualizuje stan powierzenia w bazie danych

### **Edytuj powierzenia**

W tym miejscu wyświetlone zostaną aktualne preferencje użytkownika. Może on je usunąć lub dodać nowe z predefiniowanej listy pobranej z bazy danych. Opcja `zatwierdź` dostępna będzie tylko gdy zostały zrobione jakieś zmiany.

![edit_pref](readme_resources/front_edit_preferences.png)
*Edytowanie preferencji użytkownika*

`Zatwierdź` zaktualizuje preferencje użytkownika w bazie danych jak i "na żywo" w aplikacji.

### Raportowanie
Po wybraniu tej opcji użykownikowi wyświetlone zostaną dwie kategorie raportów, które może wyświetlić
* Zajęcia bez obsady 
* Aktualne powierzenia 

![raport](readme_resources/front_raport_main.png)
*Możliwe raporty*

Po wybraniu jednej z opcji użytkownikowi wyśtwieli się pobrana lista odpowiednich danych z bazy danych

![raport_list](readme_resources/front_raport_list.png)
*Przykładowa lista przedmiotów, które nie mają jeszcze przypisanych powierzeń*

### Dwie wersje językowe

Do aplikacji można po zbudowaniu dostać się za pomocą dwóch ścieżek. 
 * http://localhost/pl/ - ten link przekieruje użytkownika na wersję polską strony 

![pl](readme_resources/front_ver_pl.png)
*Raport aktualnych powierzeń w wersji polskiej*

 * http://localhost/en/ - ten link przekieruje użytkownika na wersję polską strony 

![pl](readme_resources/front_ver_en.png)
*Raport aktualnych powierzeń w wersji angielskiej*

> Na potrzeby projektu przetłumaczone zostały tylko wybrane informacje!

Dane w różnych wersjach językowych to niektóre dane statyczne jak nazwa aplikacji i opcje w nagłówkach oraz ładowane na podstawie wybranego języka dane dynamiczne jak nazwy kursów, które posiadają w bazie danych odpowiednie dla języków translacje.

## Back-end
Tutaj opis backendu

